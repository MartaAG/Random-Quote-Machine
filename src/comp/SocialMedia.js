import React from 'react'
import {
  faTumblr,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //URL from current page
    let quote = this.props.quote;
    const tumbrlUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${quote}&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
    const twitterUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote}`;

    return (
      <div>
        <h2>Share it!</h2>
        <div>
                 <a href={tumbrlUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTumblr}/>
                 </a>
                 <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                   <FontAwesomeIcon icon={faTwitter}/>
                 </a>
             </div>
      </div>
    )
  }
}

export default SocialMedia
