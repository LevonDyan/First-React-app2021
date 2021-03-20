/*
//Profile posts data
let postsData = [
    { message: "Hi, how are you?", likeCount: 3},
    { message: "It's my first post.", likeCount: 7}
]

//Dialogs data, dialogs messages data
let dialogsData = [
    { id: 1, name: "William" },
    { id: 2, name: "James" },
    { id: 3, name: "Harper" },
    { id: 4, name: "Mason" },
    { id: 5, name: "Evelyn" },
    { id: 6, name: "Ella" },
    { id: 7, name: "Mark" }
]

let messagesData = [
    { message: "Sara will get the 6pm train from London."},
    { message: "Can you meet her at the station at 7pm?"},
    { message: "Ok!"},
    { message: "See you then;)."},
    { message: "Tina phoned this am!"}
]
*/


import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postsData: [
            { id: 1, message: "Hi, how are you?", likesCount: 3},
            { id: 2, message: "It's my first post.", likesCount: 7}
        ],
        newPostText: "it's new post!"
    },
    messagesPage: {
        dialogsData: [
            { id: 1, name: "William" },
            { id: 2, name: "James" },
            { id: 3, name: "Harper" },
            { id: 4, name: "Mason" },
            { id: 5, name: "Evelyn" },
            { id: 6, name: "Ella" },
            { id: 7, name: "Mark" }
        ],
        messagesData: [
            { message: "Sara will get the 6pm train from London."},
            { message: "Can you meet her at the station at 7pm?"},
            { message: "Ok!"},
            { message: "See you then;)."},
            { message: "Tina phoned this am!"}
        ]
    },

    /*postsData: [
        { message: "Hi, how are you?", likeCount: 3},
        { message: "It's my first post.", likeCount: 7}
    ],
    dialogsData: [
        { id: 1, name: "William" },
        { id: 2, name: "James" },
        { id: 3, name: "Harper" },
        { id: 4, name: "Mason" },
        { id: 5, name: "Evelyn" },
        { id: 6, name: "Ella" },
        { id: 7, name: "Mark" }
    ],
    messagesData: [
        { message: "Sara will get the 6pm train from London."},
        { message: "Can you meet her at the station at 7pm?"},
        { message: "Ok!"},
        { message: "See you then;)."},
        { message: "Tina phoned this am!"}
    ]*/
}

export let addPost = (postMessage) => {
    let newPost = { id: 3, message: postMessage, likesCount: 0};
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;