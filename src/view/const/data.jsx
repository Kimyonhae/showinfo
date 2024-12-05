export const data = [
    {
        "id" : 1,
        "device" : "WEB", //web OR iphone 둘중에 선택
        "title" : "ShowInfo - 나를 소개합니다",
        "working_time" : "2023년 3월 2일 ~ 2024년 4월 3일",
        "summary" : "ShowInfo는 포트폴리오 프로젝트를 보관하고 관리하기 위해 React로 만든 웹사이트입니다. 작은 프로젝트들도 잊지 않고 한 곳에 문서화하여 저장할 수 있도록 했습니다.",
        "url_link" : [
            {"urlImg" : "./social/github.svg" ,"subject" : "GITHUB URL" , "URL" : "https://github.com/Kimyonhae?tab=repositories", "isUrl" : true},
            {"urlImg" : "./icon/url.svg","subject" : "URL" ,"URL" : "https://www.showinfo.vercel.app", "isUrl" : true},
            {"subject" : "FrontEnd","skill" : ["javascript.svg","react.svg"], "isUrl" : false},
            {"subject" : "BackEnd" ,"skill" : [], "isUrl" : false },
        ],
        "project_img" : ["showinfo1","showinfo2","showinfo3"],
        "keywords" : [
            "슬라이드 구현 및 스크롤 구현",
            "데이터 모델링 및 문제 해결",
            "Mobile UI 최적화"
        ]
    },
    {
        "id" : 2,
        "device" : "WEB", //web OR iphone 둘중에 선택
        "title" : "YcnHub",
        "working_time" : "2023년 5월 21일 ~ 2023년 8월 4일",
        "summary" : "가족이 함께 사용할 수 있는 NAS 서버를 구현하기 위해, 온프레미스 방식을 활용하여 웹 호스팅을 통해 가정용 클라우드 저장소를 만들어 보았습니다",
        "url_link" : [
            {"urlImg" : "./social/github.svg" ,"subject" : "GITHUB URL" , "URL" : "https://github.com/Kimyonhae/YcnHub", "isUrl" : true},
            {"urlImg" : "./icon/url.svg","subject" : "URL" ,"URL" : "http://ycnhub.메인.한국", "isUrl" : true},
            {"subject" : "FrontEnd","skill" : ["javascript.svg","django.svg"], "isUrl" : false},
            {"subject" : "BackEnd" ,"skill" : ["django.svg"], "isUrl" : false },
        ],
        "project_img" : ["ycnhub1","ycnhub2","ycnhub3"],
        "keywords" : [
            "슬라이드 구현 및 PAM 로그인 구현",
            "파일 시스템을 이용한 CRUD",
            "download 기능 및 호스트 Ubuntu 설정"
        ]
    }
];