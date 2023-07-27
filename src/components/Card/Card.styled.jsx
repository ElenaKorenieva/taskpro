import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  margin-top: 10px;
  background-color: #121212;
  width: 334px;
  border-radius: 8px;
  padding: 15px;
  border-left: 4px solid #8fa1d0;
`;
export const PriorityWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
export const CardFooter = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.h4`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
  color: white;
`;
export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 12px;
  line-height: 1.5;
  color: #b7b7b7;
  max-width: 290px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PrioryTitle = styled.p`
  font-weight: 400;
  font-size: 8px;
  color: #999999;
  margin: 0;
`;

export const PriorySubTitle = styled.h5`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 400;
  font-size: 10px;
  color: white;
  margin: 0;
`;
export const DeadlineSubTitle = styled.h5`
  font-weight: 400;
  font-size: 10px;
  color: white;
  margin: 0;
`;
export const DeadlineTitle = styled.p`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 8px;
  color: #999999;
`;
export const Ball = styled.hr`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #8FA1D0;
    border: none;
    margin: 10px 0;
`;
export const Line = styled.hr`
    border: 1px solid #232323;
    margin: 10px 0;
`;