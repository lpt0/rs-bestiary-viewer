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

/** List all cached beasts. */
export default function AllBeasts() {
  const [ beasts, setBeasts ] = useState([]);

  useEffect(() => {
    API.get("/beasts")
      .then(res => setBeasts(res.data))
      .catch(e => console.error(e));
  }, []);

  return (
    <Table>

      <TableHead>
        <TableRow>
          <TableCell>Beast</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        { 
          beasts.map(({ id, name }: IdName) => 
            <TableRow key={id}>
              <TableCell>
                <Link component={RouterLink} to={`/beasts/${id}`}>
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