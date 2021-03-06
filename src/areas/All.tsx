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
import { Area } from "../interfaces/parameters";

/** List all areas. */
export default function AllAreas() {
  const [ areas, setAreas ] = useState([]);

  useEffect(() => {
    API.get("/areas")
      .then(res => setAreas(res.data))
      .catch(e => console.error(e));
  }, []);

  return (
    <Table>

      <TableHead>
        <Typography component="h1" variant="h5">Areas</Typography>

        <TableRow>
          <TableCell>Area</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        { 
          areas.map(({ name }: Area) => 
            <TableRow key={name}>
              <TableCell>
                <Link component={RouterLink} to={`/areas/${name}`}>
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