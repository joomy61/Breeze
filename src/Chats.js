import React from 'react';
import './Chats.css';
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
     <Chat
      name="3대 300이하 꺼지삼"
      message="오빵 3대 몇이양??"
      timestamp="1분전"
      profilepic="https://dimg.donga.com/wps/NEWS/IMAGE/2019/09/23/97546668.2.jpg"
      />
      <Chat
      name="오늘 조깅어때욤?"
      message="이따 일곱시에 한강 조깅 콜??"
      timestamp="3분전"
      profilepic="https://i.pinimg.com/originals/90/f1/bf/90f1bf7c7a52950907e6a16309a77c3d.jpg"
      />
      <Chat
      name="님 공 좀 참?"
      message="운동장에서 30분에 보자 어떰"
      timestamp="13분전"
      profilepic="https://image.newsis.com/2020/04/28/NISI20200428_0000519918_web.jpg"
      />
      <Chat
      name="강서구 헬스녀"
      message="오늘은 등하는 날인데??"
      timestamp="20분전"
      profilepic="https://img.insight.co.kr/static/2018/11/01/700/1h9sd2812z7aa21m4g4d.jpg"
      />
      <Chat
      name="걍 심심함"
      message="야 뭐함??"
      timestamp="25분전"
      profilepic="data:image/jpeg;base64,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"
      />
      <Chat
      name="노원구 꽃미녀"
      message="ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ개웃겨?"
      timestamp="32분전"
      profilepic="https://newsimg.sedaily.com/2020/06/11/1Z3ZH00J73_1.jpg"
      />
      <Chat
      name="예쁜 마라토너"
      message="나는 오늘도 달릴뿐?"
      timestamp="37분전"
      profilepic="https://lh3.googleusercontent.com/proxy/PKaIUTXne2JfmFv43s9zjexr3wDAo_4nOHwn7f-0gtkOr4_U8ryBhFvUEalAdSHjLhq4c_Ssgy8dGB9BA4DJSiYMdhvkO3VQ7TCKUhrXtX8-ejCWU67JuHOmFwLXo8sq"
      />
      <Chat
      name="개섹시녀"
      message="냥냥냥 ?"
      timestamp="42분전"
      profilepic="https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2018/08/PS18081300117.jpg"
      />





         
      
    </div>
  );
}

export default Chats;
