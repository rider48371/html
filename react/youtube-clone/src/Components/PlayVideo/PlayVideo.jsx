import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import { value_converter} from '../../data.js'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

const PlayVideo = () => {
    const {videoID} = useParams();
    const [apiData,setApiData] = useState(null);
    const [channelData,setChannelData] = useState(null);
    const [commentData,setCommentData] = useState([]);

    const fetchVideoData = async ()=>{
        //Fetching Videos Data
        const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${apiKey}`;
        await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]))
    }

    const fetchOtherData = async ()=>{
        //Fetching Channel Data
        const channelData_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${apiKey}`;
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))

        //Fetching Comment Data
        const comment_url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoID}&key=${apiKey}`;
        await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
    }
    useEffect(()=>{
        fetchVideoData();
    },[videoID])

useEffect(()=>{
    if (apiData?.snippet?.channelId) {
        fetchOtherData();
    }
},[apiData])

  return (
    <div className='play-video'>
        <iframe src={`https://www.youtube.com/embed/${videoID}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className="play-video-info">
            <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
            <div>
                <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:"No Image Available"} alt="" />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:"Error"}</p>
                <span>{channelData?value_converter(channelData.statistics.subscriberCount):"Error"}</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>{apiData?apiData.snippet.description.slice(0,250):"No Description Available"}</p>
            <hr />
            <h4>{apiData?value_converter(apiData.statistics.commentCount):"No Comment Count"}</h4>
            {commentData.map((item,index)=>{
                return (
                    <div key={index} className="comment">
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PlayVideo