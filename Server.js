/**
 * Created by JiaxinZhang on 4/2/2017.
 */
// import "User";
// import "Post";
// import "ActiveUser";
// import "ActiveUserTable";
// import "Cluster";
// import "Comment";

var userTable = new ActiveUserTable();
var postID = 0;
var usercounter = 0;

// this function is for optics logics
function optics(cluster){
    // TO DO: Implement Optics logics
    return cluster;
}

///////////////////////// Methods for users ///////////////////

// this function register a user in the all users,
// it will not make user active
function registerUser(name){
    userTable.allUsers[++usercounter] = new User(name, usercounter);
}

// this function activate an existing user, so it will be a part of optics
function makeUserActive(ID) {
    if (ID in userTable.allUsers) { // if it is a registered ID
        userTable.activeUsers[ID] = new ActiveUser(ID, 0, 0, 0, null, null, null);
    }
    else{
        // error
    }
}

function deactiveUser(ID){
    delete userTable.activeUsers[ID];
}



///////////////////////// Methods for posts //////////////////////

// this function is to add a post in the main post list,
// it should happen at user add post
function addPost(x, y, content, time, posterid, status){
    var curtime = new Date().getTime();
    userTable.posts[++postID] = new Post(x, y, content, curtime, postID, posterid, status);
}

function addPostComment(comment, targetPostID, commenterID){
    var curtime = new Date().getTime();
    userTable.posts[targetPostID].comments.push(new Comment(comment, commenterID, targetPostID, curtime));
}

function clearPosts(){
    userTable.posts = {};
}

// needs a delete comment, comment needs to be also a dictionary structure,
// think about two comments are the same person how to recognize which
// function deletePostComment()


///////////////////// Utility support for server logics /////////////

// this function takes in the cluster
function clusify(cluster){
    var newcluster = optics(cluster);
    populatePostsToCluster(cluster, posts);
    cluster = newcluster;
    return cluster;
}

function populatePostsToCluster (cluster, post, userlist){
    for (post in posts){

    }
}