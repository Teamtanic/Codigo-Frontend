import { useLocation } from "react-router-dom";
import { FolderTable } from "../../components/FolderTable";
import { Column } from "../../components/Table";
import { Node } from "../../services/Document/types";
import { TableListProps } from "../Project/TableListProject";
import { humanInstant } from "../../services/utils/instantFormatter";

export interface FolderProps extends Node {}

const columns: Column<FolderProps>[] = [
  { key: "name", title: "Nome", dataIndex: "name" },
  {
    key: "modifiedAt",
    title: "Modificado em",
    dataIndex: "modifiedAt",
    render: ({ modifiedAt }) => humanInstant(modifiedAt),
  },
];

export function TableListFolder(
  { data }: { data: FolderProps[] },
  { hasOptions = true }: TableListProps
) {
  const { pathname } = useLocation();

  return (
    <FolderTable
      link={pathname}
      data={data}
      menu={hasOptions}
      columns={columns}
    />
  );
}
