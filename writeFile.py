import json

def writeFullEmail(jsonStr):
  words = json.loads(jsonStr)
  with open('https://6367306ce3a473744650d722--deft-bombolone-a19103.netlify.app/empty.txt') as fulltext:
    count = 0
    with open('https://6367306ce3a473744650d722--deft-bombolone-a19103.netlify.app/completed.txt', 'w') as fulltext2:
      for line in fulltext:
        line = line.rstrip("\n\r")
        fulltext2.write(line + words[count])
        if (count == 0) or (count == 14) or (count == 19) or (count == 26) or (count == 31) or (count == 33):
          fulltext2.write('\n' + '    ')
        count += 1

def returnCompleted():
  f = open('https://6367306ce3a473744650d722--deft-bombolone-a19103.netlify.app/completed.txt', 'r')
  response = f.read()
  f.close()
  return (json.dumps(response))
