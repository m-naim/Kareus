import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    minWidth: 150,
  },
});


export default function StatsTable({ data }: any) {
  const classes = useStyles();

  return (
    <TableContainer >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">Aujourd&lsquo;hui</TableCell>
            <TableCell align="right">Cette Semaine</TableCell>
            <TableCell align="right">Ce Mois</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow key={row.type}>
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="right">{row.day}</TableCell>
              <TableCell align="right">{row.week}</TableCell>
              <TableCell align="right">{row.month}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
