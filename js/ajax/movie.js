// fetch
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");
// 페이지가 로드되면
const init = () => {
  // 1. 어제 날짜를 보여주기
  const now = new Date();
  console.log(now); // 2025-11-21T08:11:45.162Z

  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 월 0 부터 시작함
  const day = now.getDate() - 1; // 어제 날짜

  console.log(year, month, day);

  // 2. 구한 어제 날짜를 화면에 보여주기
  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};

init();

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  // 사용자가 입력한 날짜 가져오기
  const date = txtYear.value + selMon.value + selDay.value;
  console.log(date);

  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=beeb82286f8421eb38f55cff33ca713f&targetDt=${date}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // movieCd, movieNm, rank, rankInten
      const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

      let contents = "";
      dailyBoxOfficeList.forEach((item) => {
        console.log(item.movieCd, item.movieNm, item.rank, item.rankInten);
        // 1 위 위키드: 포 굿(0)
        // 7 세계의 주인(▲ 1)
        // 9 퍼스트 라이드(▼ -2)
        contents += `${item.rank} 위 `;
        contents += `<a href=${item.movieCd}>${item.movieNm}</a>`;
        contents += `(`;

        if (item.rankInten > 0) {
          contents += `▲ ${item.rankInten})`;
        } else if (item.rankInten < 0) {
          contents += `▼ ${item.rankInten})`;
        } else {
          contents += `${item.rankInten})`;
        }
        contents += `<br>`;
      });
      document.querySelector("#msg").innerHTML = contents;
    });
});

// 영화제목 클릭 시
// 영화상세정보 요청

// a 태그 기능 중지
// movieCd 값 가지고 오기
document.querySelector("#msg").addEventListener("click", (e) => {
  e.preventDefault();

  // 이벤트 대상 확인
  console.log(e.target);
  console.log(e.target.href);
  console.log(e.target.getAttribute("href"));

  const movieCd = e.target.getAttribute("href");
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=5b38823b0cbf3654dc8373cc8f5a322c&movieCd=${movieCd}`;

  // 한글 제목 :
  // 영어 제목 :
  // 상영 시간 :
  // 장르 :
  // 감독 :
  // 배우 :
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.movieInfoResult.movieInfo);
      const movieInfo = data.movieInfoResult.movieInfo;

      let movieDetail = "<ul>";
      movieDetail += `<li>한글 제목 : ${movieInfo.movieNm}</li>`;
      movieDetail += `<li>영어 제목 : ${movieInfo.movieNmEn}</li>`;
      movieDetail += `<li>상영 시간 : ${movieInfo.showTm} 분</li>`;

      let genres = "";
      movieInfo.genres.forEach((genre) => {
        genres += `${genre.genreNm} `;
      });
      movieDetail += `<li>장르 : ${genres}</li>`;

      let directors = "";
      movieInfo.directors.forEach((director) => {
        directors += `${director.peopleNm}`;
      });
      movieDetail += `<li>감독 : ${directors}</li>`;

      let actors = "";
      movieInfo.actors.forEach((actor) => {
        actors += `${actor.peopleNm}, `;
      });
      movieDetail += `<li>배우 : ${actors}</li>`;

      document.querySelector("#detail").innerHTML = movieDetail;
    });
});
