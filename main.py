import bottle
import json
from bottle import request
import writeFile
import send
import os


@bottle.route("/")
def normal():
  return bottle.static_file("index.html", root=".")


@bottle.route('/chat.js')
def serve_frontEndJS():
  return bottle.static_file('https://6367306ce3a473744650d722--deft-bombolone-a19103.netlify.app/chat.js', root='.')


@bottle.route('/ajax.js')
def serve_ajax():
  return bottle.static_file('https://6367306ce3a473744650d722--deft-bombolone-a19103.netlify.app/ajax.js', root='.')
  

@bottle.post('/writeFile.py')
def callWriteStuff():
  temp = request.body.read().decode("utf-8")
  writeFile.writeFullEmail(temp)
  send.sendmail()
  return (writeFile.returnCompleted())


@bottle.post('/send')
def returnCompleted():
  f = open('https://6367306ce3a473744650d722--deft-bombolone-a19103.netlify.app/completed.txt', 'r')
  response = f.read()
  f.close()
  return (json.dumps(response))


bottle.run(host='0.0.0.0', port=8080)
