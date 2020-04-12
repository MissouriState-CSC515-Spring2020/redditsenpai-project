import React, {Component} from 'react';
const API = "AIzaSyD0QfKeHMY4k5a5t2U1VOxHDdr7Vi5IEWg";
const channelID = "UCDb0peSmF5rLX7BvuTcJfCw";
const result = 5;

//https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=UCqCg6nlsQdulY4W1-peSjsQ&key=AIzaSyD0QfKeHMY4k5a5t2U1VOxHDdr7Vi5IEWg


var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;
class Anime extends Component {


    constructor(props) {
        super(props);

        this.state = {
            data: null,
            loading: true,
            resultyt: []
        };
    }

    async componentDidMount() {
        const response = await fetch(finalURL);
        this.state.data = await response.json();
        console.log(this.state.data.items[0]);
        const resultyt = this.state.data.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
        console.log(resultyt);
        this.setState({ resultyt, loading: false });
    }

    render () {
        return (
            <div>  
                <div class="row">
                <h2>Anime</h2>
                </div>
                <div class="row">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src={this.state.resultyt[0]} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="col-12 p-3">
                        {this.state.loading || !this.state.data ? (
                            <div>loading...</div>
                        ) : (
                            <div>
                                <p>Title: {this.state.data.items[0].snippet.title}</p>
                                <p>Upload date: {this.state.data.items[0].snippet.publishedAt}</p>
                                <p>Channel Title: {this.state.data.items[0].snippet.channelTitle}</p>
                                <p>Description: {this.state.data.items[0].snippet.description}</p>
                            </div>
                        )}
                    </div>
                </div>
          </div>
        );
    }
}

export default Anime;