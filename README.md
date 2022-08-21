# Backend API Specification

## 유저

---

> PROD

| Method | URI                    | Description             |
| ------ | ---------------------- | ----------------------- |
| POST   | /api/user              | 회원 가입               |
| GET    | /api/user/:id          | 유저 정보 확인(내 정보) |
| GET    | /api/user/register/:id | 유저 수강 강좌 확인     |
| GET    | /api/user/open/:id     | 유저 개설 강좌 확인     |
| GET    | /api/user/likes/:id    | 유저 찜 강좌 확인       |
| GET    | /api/user/role/:id     | 유저 ROLE 업데이트      |
| DELETE | /api/user/:id          | 유저 삭제               |

> DEV

| Method | URI                | Description         |
| ------ | ------------------ | ------------------- |
| GET    | /api/user          | 전체 유저 정보 확인 |
| PUT    | /api/user          | 유저 정보 업데이트  |
| GET    | /api/user/role/:id | 유저 ROLE 업데이트  |

<br/>
<br/>

## 강의

---

> PROD

| Method | URI                      | Description                            |
| ------ | ------------------------ | -------------------------------------- |
| POST   | /api/lecture             | 강의 생성                              |
| GET    | /api/lecture/search      | 강의 검색                              |
| GET    | /api/lecture/filter      | 강의 필터링 (카테고리, 난이도)         |
| GET    | /api/lecture/details/:id | 강의 상세 정보                         |
| POST   | /api/lecture/register    | 강의 등록                              |
| DELETE | /api/lecture/register    | 강의 등록 취소                         |
| POST   | /api/lecture/likes       | 강의 찜하기                            |
| DELETE | /api/lecture/likes       | 강의 찜하기 취소                       |
| PUT    | /api/lecture/status      | 강의 상태 업데이트(모집중, 마감, 종료) |

> DEV

| Method | URI          | Description    |
| ------ | ------------ | -------------- |
| GET    | /api/lecture | 강의 전체 목록 |

<br>
<br>
# How to use

## Run local db

`docker-compose up dev-db`

## Run backend Server

`npm run start`

## Run backend server on watch mode

`npm run start:dev`

## Run unit testing

`npm run test`
