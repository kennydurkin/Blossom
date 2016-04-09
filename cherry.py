import urllib2, json, datetime, sys
from bs4 import BeautifulSoup
from twilio import TwilioRestException
from twilio.rest import TwilioRestClient
from twilioinfo import info

def main():
	url = 'http://www.bbg.org/collections/cherries'
	cherrySoup = getSoup(url)
	blossoms = getBlossoms(cherrySoup)

	pre, first, peak, post = getStatus(blossoms)
	today = getTodaysDate()

	message = ''
	message += 'Today\'s cherry blossom status (' +today+ '):\n'
	message += '\nPrebloom: ' + str(pre)
	message += '\nFirst bloom: ' + str(first)
	message += '\nPeak bloom: ' + str(peak)
	message += '\nPost bloom: ' + str(post)
	message += '\n\nView the map at ' + str(url)

	""" Optional logging statements
	logFile = open("blossom.log","a")
	sys.stdout = logFile
	print
	print datetime.datetime.now()
	print '---------------------'
	print message """

	sendText(message)

	""" print 'All updates sent!'
	sys.stdout = sys.__stdout__
	logFile.close() """

def getSoup(url):
	request = urllib2.Request(url, None, {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/536.11'})
	urlfile = urllib2.urlopen(request)
	page = urlfile.read()
	soup = BeautifulSoup(page)

	return soup

def getBlossoms(soup):
	#the cherry loading script is the 8th script on the page
	scriptIdx = 7 #change this if their HTML structure changes

	data = soup.findAll('script')
	script = data[7].get_text()
	#this will break the second something changes on their end lol
	jsonArr = '[%s]' % (script.split('[',1)[1].rsplit(']',3)[0].rsplit(',',1)[0],)
	blossoms = json.loads(jsonArr)

	return blossoms

def getStatus(blossomArr):
	#the bloom status is the 8th element in the array
	bloomIdx = 7 #change this if their JS structure changes

	pre = first = peak = post = 0
	for blossom in blossomArr:
		#The bloom status is the 8th element of each array
		if blossom[bloomIdx] == 'open':
			pre += 1
		elif blossom[bloomIdx] == 'First Bloom':
			first += 1
		elif blossom[bloomIdx] == 'Peak Bloom':
			peak += 1
		elif blossom[bloomIdx] == 'Post-Peak Bloom':
			post += 1
	return pre, first, peak, post

def getTodaysDate():
	date = datetime.datetime.now()
	month = date.strftime("%B")
	dayNum = date.day
	return month + ' ' + str(dayNum)

def sendText(message):
	account_sid = info[0]
	auth_token = info[1]
	fromNumber = info[2]
	toNumbers = info[3]

	client = TwilioRestClient(account_sid, auth_token)
	for toNumber in toNumbers:
		try:
			print 'Sending message to', toNumber
			text = client.messages.create(from_=fromNumber, to=toNumber, body=message)
			print text.sid
		except twilio.TwilioRestException as e:
			print e

if __name__ == '__main__':
	main()