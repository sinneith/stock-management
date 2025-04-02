import { TableData } from "../../types/searchInterface.d";
import styled from "styled-components";

const CustomTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;
  thead {
    background-color: #e8e8e8;
    th {
      padding: 1.5rem 1rem;
      box-sizing: border-box;
    }
  }
  tbody {
    text-align: center;
    tr {
      cursor: pointer;

      &:not(:last-child) {
        border-bottom: 0.1rem solid #e8e8e8;
      }
      td {
        padding: 1rem;
        box-sizing: border-box;
        &:nth-child(2) {
          text-align: left;
        }
      }
    }
    .red > td {
      color: #f95151;
    }
  }
`;

const Table = ({ tableHeader, tableContent }: TableData) => {
  return (
    <CustomTable>
      <thead>
        <tr>
          {tableHeader.map((item, id) => (
            <th key={id}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableContent.map((item) => (
          <tr
            key={item.id}
            onClick={() => console.log(item.id)}
            className={item.quantity === 0 ? "red" : ""}
          >
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </CustomTable>
  );
};

export default Table;
