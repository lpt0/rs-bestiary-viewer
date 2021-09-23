import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import { API } from "../Utils";
import { Beast } from "../interfaces/types";

/** Route parameters */
type SpecificBeastProps = RouteComponentProps<{ id: string }>;

/** View data for a specific beast. */
export default function SpecificBeast({ match: { params: { id } } }: SpecificBeastProps) {
  const [ beast, setBeast ] = useState<Beast | undefined>([]);

  useEffect(() => {
    API.get(`/beasts/${id}`)
      .then(res => setBeast(res.data))
      .catch(e => console.error(e));
  }, [ id ]);

  return (
    <Table>

      <TableHead>
        <TableRow>
          <TableCell className="Title" colSpan={2}>
            <Typography component="h1" variant="h5" sx={{ width: "100%" }}>
              { beast && beast["name"] }
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{ width: "50%" }}>Property</TableCell>
          <TableCell sx={{ width: "50%" }}>Value</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        { 
          beast &&
          Object.keys(beast).map(key => {
            const value = beast[key];
            console.log(key, value, typeof value);
            if (typeof value === "object") {
              return <></>;
            } else {
              return (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{value.toString()}</TableCell>
                </TableRow>
              )
            }
          })
        }
      </TableBody>

    </Table>
  );
}