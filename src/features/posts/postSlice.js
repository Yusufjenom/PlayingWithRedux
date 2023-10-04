import {createSlice, nanoid} from '@reduxjs/toolkit';
import {sub} from 'date-fns';

const initialState = [
    {id:"1", 
    title:'Learning readux toolkit', 
    content:'i have always lloked forward to learning react dedux toolkit',
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions:{
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
},
    {id:"2", 
    title:'Redux toolkit expert',
     content:'it was such an interesting journey learning redux toolkit, i am glad to announce that  i am now a great redux developer',
     date: sub(new Date(), {minutes: 15}).toISOString(),
     reactions:{
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
    }
];

export const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
         postAdded:{
            reducer(state, action){
             state.push(action.payload)
         },
         prepare(title, content, userId){
            return{
                payload:{
                    id: nanoid(),
                    title,
                    content,
                    date: new Date().toISOString(),
                    userId,
                    reactions:{
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                }
            }
         }
        },
        reactionAdded(state, action){
            const {postId, reaction} = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
});

export const selectAllPosts = (state) => state.posts;
export const {postAdded, reactionAdded} = postSlice.actions;
export default postSlice.reducer;