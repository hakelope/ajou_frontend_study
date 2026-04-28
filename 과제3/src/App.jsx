import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <ProfileCard 
        name="김철수"
        age={25}
        job="프론트엔드 개발자"
        avatar="https://randomuser.me/api/portraits/men/1.jpg"
      />
      <ProfileCard 
        name="이영희"
        age={28}
        job="디자이너"
        avatar="https://randomuser.me/api/portraits/women/1.jpg"
      />
    </div>
  );
}

// 여기에 ProfileCard 컴포넌트를 만드세요!
function ProfileCard(props) {
  // 구현하기
  return (
      <div className="profile-card">
          <img src={props.avatar}/>
          <h2>{props.name}</h2>
          <p>{props.age} years old</p>
          <p>{props.job}</p>
     
      </div>
  )
}

export default App;