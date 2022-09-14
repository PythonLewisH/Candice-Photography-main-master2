from flask import Flask, render_template, redirect, url_for, flash, request
from forms import EnquiryForm
import smtplib
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from typing import Callable
import os
from datetime import date

# Run Flask App
app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get("SECRET_KEY", "MySecretKey")


@app.route('/')
def home():
    return render_template("index.html")


@app.route('/photography')
def photography():
    return render_template("photography.html")


@app.route('/enquiries', methods=["GET", "POST"])
def enquiries():
    enquiry_form = EnquiryForm()
    if enquiry_form.validate_on_submit():

        enquiry_name = enquiry_form.name.data
        enquiry_email = enquiry_form.email.data
        enquiry_message = enquiry_form.message.data

        password = os.getenv("PASSWORD")
        my_email = "chr_photos@outlook.com"
        subject = "ENQUIRY RECEIVED FROM PHOTOGRAPHY WEBSITE"
        message = 'Subject: {}\n\n{}'.format(subject, f"Enquirer email: {enquiry_email} \n" + f"Enquirer name: "
                                                                                              f"{enquiry_name} \n" +
                                             f"Enquirer message: {enquiry_message}")
        server = smtplib.SMTP("smtp-mail.outlook.com", 587)
        server.starttls()
        server.login(my_email, password)
        server.sendmail(my_email, my_email, message)
        server.close()

        return render_template("thankyou.html", enquiry_email=enquiry_email, enquiry_message=enquiry_message,
                               enquiry_name=enquiry_name)
    elif enquiry_form.errors:
        flash("Please use a valid email address.")
        return render_template("enquiries.html", enquiry_form=enquiry_form)
    else:
        print(enquiry_form.errors)
        return render_template("enquiries.html", enquiry_form=enquiry_form)


if __name__ == "__main__":
    app.run()
