import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { selectLoading, asyncAction, selectPosts } from "../store";
import styled from "styled-components";

interface ButtonProps {
  buttonColor: "blue" | "red" | "gray";
}

const CustomButton = styled.button<ButtonProps>`
  background-color: ${(props =>
    props.buttonColor)};
  color: white;
  &:not(:last-child) {s
    margin-right: 10px;
  }
`;

const TagButton = styled(CustomButton)`
  border-radius: 4px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-top: 20px;
`;

const Body = styled.div`
  margin: 10px auto 0px 20px;
`;

const Posts: React.FC<{}> = (props) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);

  const posts = useAppSelector(selectPosts);

  if (loading) return <div className="div">loading...</div>;

  return (
    <>
      <CustomButton buttonColor="blue" disabled={loading} onClick={() => dispatch(asyncAction())}>
        Load posts
      </CustomButton>
      <div>
        {posts.map((p) => (
          <div key={p.id}>
            <Title>{p.title}</Title>
            <Body>{p.body}</Body>
            {p.tags.map(tag => <TagButton buttonColor='gray' key={tag}>{tag}</TagButton>)}
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
