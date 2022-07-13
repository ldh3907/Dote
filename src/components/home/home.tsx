import { Vote } from "../../interfaces/common/common.type";
import HomeVoteItem from "./homeVoteItem/homeVoteItem";
import { HomeContainer } from "./style";
import CustomModal from "../common/modal/customModal";
import VoteForm from "../admin/voteForm/voteForm";
import { useState } from "react";
const test: Vote[] = [
  {
    id: 1,
    title: "투표 1",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 2,
    title: "투표 2",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 3,
    title: "투표 3",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 4,
    title: "투표 4",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 5,
    title: "투표 5",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 6,
    title: "투표 6",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 7,
    title: "투표 7",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 8,
    title: "투표 8",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
];

const Home = () => {
  const [modalState, setModalState] = useState<boolean>(true);
  return (
    <HomeContainer>
      {modalState && (
        <CustomModal closeModal={setModalState}>
          <VoteForm />
        </CustomModal>
      )}
      <>
        {test.map((item) => (
          <HomeVoteItem key={"vote " + item.id} voteData={item} />
        ))}
      </>
    </HomeContainer>
  );
};

export default Home;
