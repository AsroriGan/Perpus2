<?php

namespace App\Http\Controllers;

use App\Models\DafatrGuru;
use App\Imports\UserImport;
use Illuminate\Http\Request;
use App\Imports\DaftarGuruImport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class DafatrGuruController extends Controller
{
    public function daftarguru(){
        $data = DafatrGuru::all();
        return view('guru.daftarguru', compact('data'));
    }

    public function importexcelguru(Request $request) 
    {
        // validasi
        $this->validate($request, [
            'file' => 'required|mimes:csv,xls,xlsx'
        ]);
 
        // menangkap file excel
        $file = $request->file('file');
 
        // membuat nama file unik
        $nama_file = rand().$file->getClientOriginalName();
 
        // upload ke folder file_siswa di dalam folder public
        $file->move('file_guru',$nama_file);
 
        // import data
        Excel::import(new DaftarGuruImport, public_path('/file_guru/'.$nama_file));
 
        // alihkan halaman kembali
        return redirect()->back()->with('success','Data Siswa Berhasil Diimport!');
    }

    
}
