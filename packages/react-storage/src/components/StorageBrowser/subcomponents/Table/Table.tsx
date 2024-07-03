import * as React from 'react';
import { TableElementProps } from '@aws-amplify/ui-react/internal';
import { useElement } from '../../context/elements';
import { TableCaption } from './TableCaption';
import { TableColumn } from './TableColumn';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableFoot } from './TableFoot';

const TablePrimitive = <T extends TableElementProps>({
  ariaLabel = 'Table',
  className: _className,
  children,
  ...rest
}: T): JSX.Element => {
  const Table = useElement('Table');
  const baseClassName = 'storage-browser-table';
  const className = _className ?? baseClassName;

  return (
    <Table {...rest} aria-label={ariaLabel} className={className}>
      {children}
    </Table>
  );
};

const Table = Object.assign(TablePrimitive, {
  Caption: TableCaption,
  Body: TableBody,
  Cell: TableCell,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
  Column: TableColumn,
  Foot: TableFoot,
});

export { Table };
