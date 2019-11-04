import React from 'react'
import {
  faTumblr,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialMedia.css";


class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //URL from current page
    let quote = " \" " + this.props.quote.quote + " \" " + ' ' + this.props.quote.author;
    const tumbrlUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${quote}&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
    const twitterUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote}`;

    return (
      <div className="social-media">
        <h3>Share it:</h3>
        <div>
                 <a href={tumbrlUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="share"
                   >
                    <FontAwesomeIcon icon={faTumblr}/>
                 </a>
                 <a href={twitterUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   id="tweet-quote"
                   className="share">
                   <FontAwesomeIcon icon={faTwitter}/>
                 </a>
                 <a href={twitterUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   id="tweet-quote"
                   className="share">
                   <FontAwesomeIcon icon={faLinkedin}/>
                 </a>
             </div>
      </div>
    )
  }
}

export default SocialMedia
