import { useState, FormEvent, useEffect } from 'react';

import { Button } from '../components/Button';

import { api } from "../lib/axios";
import '../styles/main.css';

import Box from '@mui/material/Box';
import { DataGrid, ptBR } from '@mui/x-data-grid';
import ClearIcon from '@mui/icons-material/Clear';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export function DownloadExcel() {

  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [rows, setRows] = useState<any>([]);

  const columns = [
    {
      field: 'registrationNumber',
      headerName: 'Matrícula',
      width: 125,
      editable: false,
      disableSelectionOnClick: true
    },
    {
      field: 'name',
      headerName: 'Nome',
      flex: 1,
      editable: false,
      disableSelectionOnClick: true
    },
    // {
    //   field: 'alreadyAnswered',
    //   headerName: 'Votou',
    //   flex: 1,
    //   editable: false,
    // },
    {
      field: 'alreadyAnswered',
      headerName: 'Votou',
      width: 110,
      renderCell: (params: any) => (
        <div>
          {params.value ?
            <CheckBoxIcon style={{ color: 'green' }} /> :
            <ClearIcon style={{ color: '#ab3333' }} />}
        </div>
      ),
      disableSelectionOnClick: true
    },
  ];


  async function handleForm() {
    if (!user || !password) {
      return;
    }
    try {
      await api.get(`form-excel/${user}/${password}`, {
        headers: { "Content-Security-Policy": "upgrade-insecure-requests" },
        responseType: 'blob'
      })
        .then((result) => {
          var binaryData = [];
          binaryData.push(result.data);
          var href = window.URL.createObjectURL(new Blob(binaryData, { type: "application/xlsx" }))

          const link = document.createElement('a');
          link.href = href;
          link.setAttribute('download', 'file.xlsx');
          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
          URL.revokeObjectURL(href);
        });
      alert('Excel baixado com sucesso!');
    } catch (error) {
      alert('Erro ao baixar excel!');
    }
  }

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (!user || !password) {
      alert('Usuário ou senha incorretos');
      return;
    }

    try {
      await api.get(`students/${user}/${password}`, {
        headers: { "Content-Security-Policy": "upgrade-insecure-requests" }
      })
        .then((result) => {
          setIsLogged(true);
          setRows(result.data);
        });
    } catch (error) {
      alert('Erro ao logar!');
    }
  }

  return (
    <div className='bg-slate-100 min-h-[78vh] mx-auto flex flex-col justify-center items-center'>

      {!isLogged ?
        <div className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-bluePurple-500 text-4xl text-center font-bold'>
            ENTREVISTA CLÍNICA
          </h1>
          <h1 className='text-bluePurple-500 text-4xl text-center font-bold'>
            ESTRUTURADA
          </h1>

          <form onSubmit={handleLogin} className='flex flex-col w-1/5 max-[1101px]:w-auto mt-5'>
            <label className='text-zinc-800 font-semibold'>Usuário:</label>
            <input
              className='p-3 mt-2 border-solid border-2 border-gray-300
            hover:border-gray-500 focus:border-gray-500 rounded-lg'
              type="text"
              placeholder='Informe seu usuário'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />

            <label className='text-zinc-800 font-semibold mt-3'>Senha:</label>
            <input
              className='p-3 mt-2 border-solid border-2 border-gray-300
            hover:border-gray-500 focus:border-gray-500 rounded-lg'
              type="password"
              placeholder='Informe sua senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button value='Login' />
          </form>
        </div>
        :
        <div className='mt-5 w-full flex flex-col justify-center items-center'>
          <button
            className='px-10 h-12 mt-5 rounded-md font-semibold
            flex justify-center items-center
            text-slate-900
            bg-[#a1b3d3] hover:bg-[#8fa1c7]
            00 
            disabled:bg-[#c1d3ee]
            transition-colors duration-300'
            onClick={() => handleForm()}
          >
            Baixar Respostas
          </button>

          <Box className="mt-12" sx={{ width: '100%', maxWidth: '1000px' }}>
            <DataGrid
              localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
              rows={rows}
              columns={columns}
              className="bg-gray-100 shadow-md p-5"
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 25,
                  },
                },
              }}
              pageSizeOptions={[25, 50, 100]}
              disableRowSelectionOnClick
              autoHeight
            />
          </Box>
        </div>
      }
    </div>
  )
};