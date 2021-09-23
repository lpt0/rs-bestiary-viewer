import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from "@mui/material/Link";
import { API } from "../Utils";
import { IdName } from "../interfaces/parameters";

/** List all weaknesses. */
export default function AllWeaknesses() {
  const [ weaknesses, setWeaknesses ] = useState([]);

  useEffect(() => {
    API.get("/weaknesses")
      .then(res => setWeaknesses(res.data))
      .catch(e => console.error(e));
  }, []);

  return (
    <Table>

      <TableHead>
        <TableRow>
          <TableCell>Weakness</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        { 
          weaknesses.map(({ id, name }: IdName) => 
            <TableRow key={id}>
              <TableCell>
                <Link component={RouterLink} to={`/weaknesses/${id}`}>
                  {name}
                </Link>
              </TableCell>
            </TableRow>
          )
        }
      </TableBody>

    </Table>
  );
}