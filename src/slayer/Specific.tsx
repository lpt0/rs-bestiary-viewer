import { useState, useEffect } from "react";
import { Link as RouterLink, RouteComponentProps } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from "@mui/material/Link";
import { API } from "../Utils";
import { LabelValue } from "../interfaces/parameters";

/** Route parameters */
type SpecificSlayerProps = RouteComponentProps<{ id: string }>;

/** List all beasts belonging to a specific slayer category. */
export default function SpecificSlayerCategory({ match: { params: { id } } }: SpecificSlayerProps) {
  const [ beasts, setBeasts ] = useState([]);

  useEffect(() => {
    API.get(`/slayer/${id}`)
      .then(res => setBeasts(res.data))
      .catch(e => console.error(e));
  }, [ id ]);

  return (
    <Table>

      <TableHead>
        <TableRow>
          <TableCell>Beast</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        { 
          beasts.map(({ label, value }: LabelValue) => 
            <TableRow key={value}>
              <TableCell>
                <Link component={RouterLink} to={`/beasts/${value}`}>
                  {label}
                </Link>
              </TableCell>
            </TableRow>
          )
        }
      </TableBody>

    </Table>
  );
}