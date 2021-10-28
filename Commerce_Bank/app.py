from flask import Flask,render_template,request,flash,session,redirect,url_for
import mysql.connector
import pandas as pd
import datetime
date=datetime.datetime.now()
db=mysql.connector.connect(user='root',port=3306,database="bank_transaction",charset="utf8")
cur=db.cursor()
app=Flask(__name__)
app.config['SECRET_KEY']='@!@^&*&^*^$#$#&^%&$@%^$@$*(()&^%%'



@app.route('/home')
def home():
    return render_template('home.html')
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/register',methods=['POST','GET'])
def register():
    if request.method=='POST':
        username=request.form['UserName']
        Email=request.form['Email']
        password1=request.form['Password']
        password2= request.form['Conpassword']
        debitcard=request.form['DebitCard']
        accno=request.form['AccNo']
        IFSC=request.form['IFSC']
        contact=request.form['ContactNo']
        if password1 == password2:
            sql="SELECT * from registration"
            cur.execute(sql)
            data=cur.fetchall()
            db.commit()
            x=[j for i in data for j in i]
            if username in x and Email in x:
                flash("User Name already exists",'alert')
                return render_template('register.html')
            else:
                sql="INSERT INTO registration (UserName,Email,Password,DebitCard,AccNo,SWIFT,ContactNo) values(%s,%s,%s,%s,%s,%s,%s)"
                val=(username,Email,password1,debitcard,accno,IFSC,contact)
                cur.execute(sql,val)
                db.commit()
                msg="Registered successfuly you can login now"
                return render_template('login.html',msg=msg)
        else:
            flash("Password not matching","Alert")
            return render_template('register.html')
    return render_template('register.html')



@app.route('/login',methods=['POST','GET'])
def login():
    if request.method=='POST':
        name=request.form['username']
        session['name']=name
        password=request.form['password']
        session['pass']=password
        try:
            sql = "select UserName,Password,AccNo,Balance from registration WHERE UserName='%s' and Password='%s'" % (name, password)
            cur.execute(sql)
            data = cur.fetchall()
            db.commit()
            i = [j for i in data for j in i]

            if i==[]:
                flash("Account Doesn't Exists", "success")
                return render_template('login.html')
            sql = "select * from registration WHERE UserName='%s' and Password='%s'" % (name, password)
            cur.execute(sql)
            data = cur.fetchone()
            db.commit()
            session['accno']=data[-4]
            session['balance']=data[-1]
            flash("Now Make Your Transactions", "msg")
            return render_template("log.html", name=data[1], Balance=data[-1], AccNo=data[-4])
        except:
            return render_template('login.html')
    return render_template('login.html')



@app.route('/deposit',methods=['POST','GET'])
def deposit():
    if request.method == 'POST':
        Fromaccount = request.form['Fromaccount']
        toaccount = request.form['toaccount']
        Amount = int(request.form['Amount'])
        Description = request.form['Description']
        Bankname=request.form['BankName']
        Swiftcode=request.form['Swiftcode']
        da=date.strftime("%x")
        dt = date.strftime("%I:%M %p")
        print(dt)

        sql="select * from registration where AccNo=%s"%(Fromaccount)
        cur.execute(sql)
        info=cur.fetchall()
        db.commit()
        bal=[j for b in info for j in b]

        total=bal[-1]

        total = int(total) - Amount
        session['balance'] = total
        sql="select * from registration where AccNo=%s"%(toaccount)
        cur.execute(sql)
        d=cur.fetchall()
        db.commit()

        x=[j for i in d for j in i]
        print(x)
        if d==[]:
            flash('Receiver Account is not valid',"success")
            return redirect(url_for('deposit'))

        a=int(x[-1]) + Amount
        y=int(x[-1])
        aaa=Amount
        t='Credit'
        # sql="insert into tablename1(Date,Time,TotalBalance,TransactionType,Amount,Description,ReceiverAccount) values(%s,%s,%s,%s,%s,%s,%s)"
        # val=(da,dt,total,t,Amount,Description,toaccount)
        # cur.execute(sql, val)
        # db.commit()

        sql="insert into transactions1(AccountNo,Date,Time,TotalBalance,TransactionType,Amount,Description,ReceiverAccount,SenderAccount,BankName,SwiftCode) values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
        val=(toaccount,da,dt,a,t,aaa,Description,toaccount,Fromaccount,Bankname,Swiftcode)
        cur.execute(sql,val)
        db.commit()
        type = "Debit"
        sql="update registration set Balance=%s  where Balance=%s and AccNo=%s "%(a,y,toaccount)
        cur.execute(sql)
        db.commit()

        if Amount > int(bal[-1]):
            flash("no such Amount to make transactions", "alert")
            return render_template("log.html",name=bal[1], Balance=bal[-1], AccNo=bal[-4])
        else:

            act_bal=int(bal[-1]) - Amount
            sql = "update registration set Balance=%s where Balance=%s and AccNo=%s " % (act_bal,bal[-1], Fromaccount)
            cur.execute(sql)
            db.commit()


            sql="insert into transactions1 (AccountNo,Date,Time,TotalBalance,TransactionType,Amount,Description,ReceiverAccount,SenderAccount) values(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
            val=(Fromaccount,da,dt,act_bal,type,Amount,Description,toaccount,Fromaccount)
            cur.execute(sql,val)
            db.commit()

            sql="select Date,Time,TotalBalance,TransactionType,Amount,Description,ReceiverAccount from transactions1 where AccountNo='%s'"%(Fromaccount)
            data=pd.read_sql_query(sql,db)
            db.commit()

            sql="select Balance from registration where AccNo='%s'"%(Fromaccount)
            cur.execute(sql)
            val=cur.fetchone()
            db.commit()
            c=val[0]
            return render_template('log.html',AccNo=Fromaccount,name=session['name'],Balance=c,cols=data.columns,rows=data.values.tolist())
    return render_template('dform.html',a=session['accno'])


@app.route('/transaction')
def transaction():
    sql = "select Date,Time,TotalBalance,TransactionType,Amount,Description,SenderAccount,ReceiverAccount from transactions1 where AccountNo='%s'" % (session['accno'])




    # Temparary_df=df
    # df=Temparary_df.drop(['SenderAccount'],axis=1)
    # df=Temporary_df.drop(['ReceiverAccount'],axis=1)

    # sql="update transactions1 set TransactionType='credit' where TransactionType='None' and AccountNo=%s"%(session['accno'])
    # cur.execute(sql)
    # db.commit()

    df = pd.read_sql_query(sql, db)
    # debit = df[df['TransactionType']== 'Debit']
    #
    # debit = debit.drop(['SenderAccount'],axis =1)
    # print(debit)
    # credit = df[df['TransactionType'] == 'Credit']
    # credit = credit.drop(['ReceiverAccount'],axis =1)
    # print(credit)
    df=df.drop(['ReceiverAccount'],axis=1)
    db.commit()

    return render_template('transaction.html',cols=df.columns,rows=df.values.tolist())

@app.route('/logout')
def logout():
    session.pop('name',None)
    return redirect(url_for('home'))


if __name__=='__main__':
    app.run(debug=True)
