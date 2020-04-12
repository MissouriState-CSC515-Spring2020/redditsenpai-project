import React, {Component} from 'react';
const API = "AIzaSyD0QfKeHMY4k5a5t2U1VOxHDdr7Vi5IEWg";
const channelID = "UCSJ4gkVC6NrvII8umztf0Ow";
const result = 5;

//https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=UCqCg6nlsQdulY4W1-peSjsQ&key=AIzaSyD0QfKeHMY4k5a5t2U1VOxHDdr7Vi5IEWg


var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;
class music extends Component {


    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            resultyt: []
        };
    }

    async componentDidMount() {
        const response = await fetch(finalURL);
        const data = await response.json();
        const resultyt = data.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
        console.log(resultyt);
        this.setState({ resultyt, loading: false });
    }

    render () {
        return (
            <div>
                <div>
                    <h2>Music</h2>
                    <div class="row"></div>
                </div>
                <div class="row">
                    {
                        this.state.resultyt.map((link, i) => {
                        console.log(link);
                        var frame = <div class="embed-responsive embed-responsive-16by9">
                                        <iframe class="embed-responsive-item p-3" width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                        return frame;
                        })
                    }
                    {this.frame}
            </div>
            </div>
        );
    }
}
export default music;