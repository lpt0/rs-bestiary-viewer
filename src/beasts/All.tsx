import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

/** List all cached beasts. */
export default function AllBeasts() {
  const [ beasts, setBeasts ] = useState([]);

  return (
    <Table>

      <TableHead>
        <TableRow>
          <TableCell>Beast</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        { 
          beasts.map((area: string) => 
            <TableRow>
              <TableCell>
                <Link to={`/beasts/${area}`}>
                  {area}
                </Link>
              </TableCell>
            </TableRow>
          )
        }
      </TableBody>

    </Table>
  );
}