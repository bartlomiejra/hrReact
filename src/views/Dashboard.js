import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Link } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { Navigate, useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersPrivider';
const Dashboard = () => {
  const { groups } = useStudents();

  const { id } = useParams();

  if (!id && groups.length > 0) return <Navigate to={`/group/${groups[0]}`} />;
  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList />
      </GroupWrapper>
    </Wrapper>
  );
};
export default Dashboard;
