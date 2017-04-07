/**
 * Created by JiaxinZhang on 4/2/2017.
 */


var userTable = new ActiveUserTable();
var postID = 0;
var usercounter = 0;

// this function is for optics logics
function optics(cluster){
    // TO DO: Implement Optics logics
    cluster = OPTICS(cluster);
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

// this function is to add a comment to a post
function addPostComment(comment, targetPostID, commenterID){
    var curtime = new Date().getTime();
    userTable.posts[targetPostID].comments.push(new Comment(comment, commenterID, targetPostID, curtime));
}

// clear all posts, this function is called on a regular basis
function clearPosts(){
    userTable.posts = {};
}

// needs a delete comment, comment needs to be also a dictionary structure,
// think about two comments are the same person how to recognize which
// function deletePostComment()


///////////////////// Utility support for server logics /////////////

// this function assign posts to clusters
// this functio performs knn to find the closest person and find its cluster
function populatePostsToCluster (cluster, posts, userlist){
    for (var eachpost in posts){
        var result = null;
        var measure = 2^31 - 1;
        for (var eachuser in userlist){
            var distance = pow(eachuser.x - eachpost.x, 2) + pow(eachuser.y - eachpost.y, 2);
            if (distance < result){
                measure = distance;
                result = eachuser;
            }
        }
        cluster[result.clusterID].push(eachpost);
    }
}

// this function takes in the cluster
function clusify(cluster){
    var newcluster = optics(cluster); // this should populate the cluster
    // but it should have posts section empty
    // it should populate the users section

    populatePostsToCluster(newcluster, posts);
    cluster = newcluster;
    return cluster;
}

function speedUpdate(userid, speed){
    userTable.activeUsers[userid].speed = speed;
}

// TODO, need to add token logic, but it can be done later