import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { API } from "../Utils";
import { IdName } from "../interfaces/parameters";

/** List all slayer categories. */
export default function AllSlayerCategories() {
  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    API.get("/slayer")
      .then(res => setCategories(res.data))
      .catch(e => console.error(e));
  }, []);

  return (
    <Table>

      <TableHead>
        <Typography component="h1" variant="h5">Slayer Categories</Typography>

        <TableRow>
          <TableCell>Category</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        { 
          categories.map(({ id, name }: IdName) => 
            <TableRow key={id}>
              <TableCell>
                <Link component={RouterLink} to={`/slayer/${id}`}>
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