import user
import UserTable
import Cluster
import Post
import flask
import json


from flask import Flask

usertable = UserTable.ActiveUserTable()
posts = []

app = Flask(__name__)

# def populate(clusters, users):
# 	for post in posts:
# 		resultCluster = None
# 		param = 2^31 - 1
# 		for user in users:
#
# def cluster():
# 	clusters = Optics(usertable.table)
# 	populate(clusters, usertable.table)
#
# @app.before_first_request
# def _run_on_start(a_string):



@app.route("/")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run("", 80)



# class MyTCPHandler(SocketServer.BaseRequestHandler):
# 	def setup(self):
#
#
#
#
# 	def handle(self):
# 		self.data = json.dumps(self.request.recv(1024).strip())
#

	





#def threadhandle():  # This handles the push from the client to the server
	# listen for connection
	# check token, get user id
	# receive x, y
	# hash out the city
	# insert or update method (to look up user)
	# if insert:
	#		table.append(user data)
	# else:
	# 		update table

#def createPost():
	# 






		# probably need logic on set timing to re-cluster
