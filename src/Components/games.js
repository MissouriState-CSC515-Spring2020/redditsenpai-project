import React, {Component} from 'react';
const API = "AIzaSyD0QfKeHMY4k5a5t2U1VOxHDdr7Vi5IEWg";
const channelID = "UCqCg6nlsQdulY4W1-peSjsQ";
const result = 10;

//https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=UCqCg6nlsQdulY4W1-peSjsQ&key=AIzaSyD0QfKeHMY4k5a5t2U1VOxHDdr7Vi5IEWg


var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;
class Games extends Component {


    constructor(props){
        super(props);

        this.state = {
            resultYT: []
        };
        this.clicked = this.clicked.bind(this);
    }
    clicked(){
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson);
                const resultYT = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
                this.setState({resultYT});
                console.log(this.state.resultYT);
                
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        //console.log(finalURL);
        return(
            <div>
                <button className= "game_button" onClick={this.clicked}>J1mmy?</button>
                {
                    this.state.resultYT.map((link,i) => {
                        console.log(link);
                        var frame = <div key = {i} className="games"><iframe width="560" height="315" src={link}frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        return frame;
                    })
                }
                {this.frame}
            </div>
        );
    }
}
export default Games;