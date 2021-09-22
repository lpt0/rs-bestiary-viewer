import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

/** List all weaknesses. */
export default function AllWeaknesses() {
  const [ weaknesses, setWeaknesses ] = useState([]);

  return (
    <Table>

      <TableHead>
        <TableRow>
          <TableCell>Weakness</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        { 
          weaknesses.map((area: string) => 
            <TableRow>
              <TableCell>
                <Link to={`/weaknesses/${area}`}>
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