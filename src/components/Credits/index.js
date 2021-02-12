import React from 'react';

export default () => {
  return (
    <div className="credits">
      <a href="https://www.twitter.com/codemonky007">AB: @codemonky007</a>
      <style jsx>
        {`
        .credits {
          position: fixed;
          bottom: 30px;
          left: 30px;
          z-index: 10;
          color: white;
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 18px;
          font-weight; 700;
          opacity: 0.5;
          transition: all 0.6s;
        }
        .credits:hover {
          opacity: 1;
        }
      `}
      </style>
    </div>
  );
};
