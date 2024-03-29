import React from 'react';
import farmerImage from '../../images/farmer.jpg';
import YouTube from 'react-youtube';

function About() {
  // Replace 'YOUR_YOUTUBE_VIDEO_ID' with the actual video ID from your YouTube link
  const youtubeVideoId = 'EooxomHODUk';  // Extracted video ID from the YouTube URL

  // YouTube options
  const opts = {
    width: '80%',
    height:'200%',
    playerVars: {
      autoplay: 0, // Autoplay disabled
    },
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4 flex items-center justify-center">
        <img src={farmerImage} alt="Farmer" className="w-24 h-24 rounded-full object-cover" />
      </div>
      <div className="my-8 sm:w-full lg:w-1/2 mx-auto">
        <h3 className="text-xl font-bold mb-2">Farm Video</h3>
        <div className="aspect-w-16 aspect-h-9">
          <YouTube videoId={youtubeVideoId} opts={opts} />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">About the Farmer</h2>
      <p className="text-lg mb-4">
        Tathagat is an Engineer and a Post Graduate from IIT Bombay (Centre for Technology Alternatives for Rural Areas).
        His long-term passion brought him to farms, and now, he is practicing chemical-free farming at his village in Madhya Pradesh.
        Everything is grown and processed at his farm only.
      </p>
      <p className="text-lg">
        He believes in the concept of "Organic Farmer" and not "Organic Farming"; because if the farmer turns organic, farming will automatically follow :)
      </p>

      {/* Additional farm information */}
      <div className="my-8">
        <h3 className="text-xl font-bold mb-2">Farm Location</h3>
        <p>Village Chhapri, Teh. Kalapipal, Dist. Shajapur [MP]</p>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-2">Live Updates</h3>
        <p>For live updates from our farm, please follow our Facebook page: "Tathagat : A Farmer"</p>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-2">Manufactured and Packed by</h3>
        <p>Tathagat : A Farmer</p>
        <p>388, EE, Scheme no. 94, Indore-452001</p>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-2">Customer Care</h3>
        <p>Customer Care No.: +91-9826981282</p>
        <p>Email: tathagatafarmer@gmail.com</p>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-2">Storage Instructions</h3>
        <p>Being a natural farm product, there is bound to be variation in shape, size, colour, and scent with the crop every year.</p>
        <p>Store in a cool and dry place inside an air-tight container.</p>
      </div>

      {/* YouTube Video */}
    </div>
  );
}

export default About;
