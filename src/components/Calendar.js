import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
`;

const CalendarWrap = styled.div`
  padding: 20px 0;
  margin: 0 16px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
`;

const H1 = styled.h1`
  margin: 16px 0;
  font-size: 2.5rem;
  font-weight: 600;
`;

const MonthButton = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
`;

const DayIndicator = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-row-gap: 0.2rem;
  grid-column-gap: 0.2rem;
  width: 80%;
  height: 2rem;
  margin-bottom: 0.3rem;
`;
const DateIndicator = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-row-gap: 0.2rem;
  grid-column-gap: 0.2rem;
  width: 80%;
  height: 16rem;
`;
const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.primary};
`;

const DateCell = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.white};
`;

export const Calendar = () => {
  const today = new Date();
  const [getYear, setGetYear] = useState(today.getFullYear());
  const [getMonth, setGetMonth] = useState(today.getMonth() + 1);

  const decreaseMonth = () => {
    if (getMonth === 1) {
      setGetMonth(12);
      setGetYear(getYear - 1);
    } else setGetMonth(getMonth - 1);
  };

  const increaseMonth = () => {
    if (getMonth === 12) {
      setGetMonth(1);
      setGetYear(getYear + 1);
    } else setGetMonth(getMonth + 1);
  };

  const loadCalendar = () => {
    const thisMonth = new Date(getYear, getMonth - 1, 1);
    const firstDay = thisMonth.getDay();
    const firstDate = thisMonth.getDate();
    const lastDay = new Date(getYear, getMonth, 0).getDay();
    const lastDate = new Date(getYear, getMonth, 0).getDate();
    let month = [];

    if (firstDay !== 0) {
      for (let i = 1; i <= firstDay; i++)
        month.push(new Date(getYear, getMonth - 1, i - firstDay).getDate());
    }
    for (let i = firstDate; i <= lastDate; i++)
      month.push(new Date(getYear, getMonth - 1, i).getDate());
    if (lastDay !== 6) {
      for (let i = 1; i <= 6 - lastDay; i++)
        month.push(new Date(getYear, getMonth, i).getDate());
    }
    return month;
  };

  const handleClick = (e) => {
    const reservCode = "100";
    console.log(reservCode[1] + reservCode[2] === "00");
    // console.log(new Date(getYear, getMonth - 2, e.target.textContent) > today);
  };

  return (
    <Container>
      <MonthButton onClick={decreaseMonth}> &larr;</MonthButton>
      <CalendarWrap>
        <h3>{getYear}</h3>
        <H1>{getMonth}월</H1>
        <DayIndicator>
          <Day className="sunday">일</Day>
          <Day>월</Day>
          <Day>화</Day>
          <Day>수</Day>
          <Day>목</Day>
          <Day>금</Day>
          <Day>토</Day>
        </DayIndicator>
        <DateIndicator>
          {loadCalendar().map((date, i) =>
            (date > 20 && i < 10) || (date < 10 && i > 20) ? (
              <DateCell className="date-off" key={i}>
                {date}
              </DateCell>
            ) : (
              <DateCell onClick={handleClick} key={i}>
                {date}
              </DateCell>
            )
          )}
        </DateIndicator>
      </CalendarWrap>
      <MonthButton onClick={increaseMonth}>&rarr;</MonthButton>
    </Container>
  );
};
