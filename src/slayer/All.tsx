import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

/** List all slayer categories. */
export default function AllSlayerCategories() {
  const [ categories, setCategories ] = useState([]);

  return (
    <Table>

      <TableHead>
        <TableRow>
          <TableCell>Slayer Category</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        { 
          categories.map((area: string) => 
            <TableRow>
              <TableCell>
                <Link to={`/areas/${area}`}>
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