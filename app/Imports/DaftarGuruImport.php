<?php

namespace App\Imports;

use App\Models\DafatrGuru;
use Maatwebsite\Excel\Concerns\ToModel;

class DaftarGuruImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new DafatrGuru([
            'nuptk' => $row[1],
            'nama' => $row[2], 
            'jeniskelamin' => $row[3],
            'foto' => $row[4],
        ]);
    }
}
