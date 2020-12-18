import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Table = styled.table`
  margin-top: 20px;
  font-size: 14px;
  table-layout: fixed;
  width: 100%;
  border: 1px solid #e1e1e1;
  th,
  td {
    border: 1px solid #e1e1e1;
    padding: 5px;
  }
  thead tr th:first-child,
  tbody tr td:first-child {
    width: 100px;
    text-align: center;
  }
  thead tr th {
    background-color: #f6e58d;
  }
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Table>{children}</Table>
  </Container>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

export default Section;
