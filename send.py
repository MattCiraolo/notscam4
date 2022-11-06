#tpdgpzbbkvjybhby

import yagmail

def sendmail():

  user = 'realbusinessproposal@gmail.com'
  app_password = 'tpdgpzbbkvjybhby' # a token for gmail
  to = ['4410fjm@gmail.com', 'mattdcir@gmail.com', 'mables1026@gmail.com', 'merlof22storage@gmail.com', 'merlof22storage1@gmail.com', 'michaelhorvath896@gmail.com']

  subject = 'ATTENTION'
  f = open('https://mattciraolo.github.io/notscam4/completed.txt', 'r')
  response = f.read()
  f.close()
  content = [response]

  with yagmail.SMTP(user, app_password) as yag:
    for name in to:
      yag.send(name, subject, content)
      print('Sent email successfully')