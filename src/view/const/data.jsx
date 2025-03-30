export const data = [
    {
        "id" : 1,
        "device" : "WEB", //web OR iphone 둘중에 선택
        "title" : "ShowInfo - 나를 소개합니다",
        "working_time" : "2023년 3월 2일 ~ 2024년 4월 3일",
        "summary" : "ShowInfo는 포트폴리오 프로젝트를 보관하고 관리하기 위해 React로 만든 웹사이트입니다. 작은 프로젝트들도 잊지 않고 한 곳에 문서화하여 저장할 수 있도록 했습니다.",
        "url_link" : [
            {"urlImg" : "./social/github.svg" ,"subject" : "GITHUB URL" , "URL" : "https://github.com/Kimyonhae?tab=repositories", "isUrl" : true},
            {"urlImg" : "./icon/url.svg","subject" : "URL" ,"URL" : "https://showinfo.vercel.app", "isUrl" : true},
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
];