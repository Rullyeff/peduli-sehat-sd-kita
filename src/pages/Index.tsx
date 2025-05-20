
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Activity, Thermometer, User, BookOpen, MessageSquare } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <img src="/images/logo-health.png" alt="Peduli Sehatku Logo" className="h-16 w-auto" />
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-indigo-600">Peduli Sehatku</h1>
              <p className="text-gray-500">Aplikasi Pemantau Kesehatan Anak SD</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Selamat Datang di Peduli Sehatku</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Peduli Sehatku membantu memantau kesehatan anak sekolah dasar dengan mudah dan menyenangkan
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-blue-50 rounded-t-lg">
              <User className="w-12 h-12 text-blue-500 mx-auto" />
              <CardTitle className="text-center text-blue-700">Untuk Siswa</CardTitle>
              <CardDescription className="text-center">
                Catat kesehatan harianmu dengan mudah
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Thermometer className="mr-2 h-5 w-5 text-blue-500" />
                  <span>Catat suhu dan tekanan darah</span>
                </li>
                <li className="flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-blue-500" />
                  <span>Pantau berat dan tinggi badan</span>
                </li>
                <li className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-blue-500" />
                  <span>Laporkan keluhan kesehatan</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <a href="/siswa/dashboard.html" className="w-full">Masuk Portal Siswa</a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-green-50 rounded-t-lg">
              <BookOpen className="w-12 h-12 text-green-500 mx-auto" />
              <CardTitle className="text-center text-green-700">Untuk Guru</CardTitle>
              <CardDescription className="text-center">
                Pantau kesehatan murid dengan terperinci
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <User className="mr-2 h-5 w-5 text-green-500" />
                  <span>Lihat data kesehatan siswa</span>
                </li>
                <li className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-green-500" />
                  <span>Tanggapi keluhan kesehatan</span>
                </li>
                <li className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-green-500" />
                  <span>Pantau tren kesehatan kelas</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <a href="/guru/dashboard.html" className="w-full">Masuk Portal Guru</a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-orange-50 rounded-t-lg">
              <Activity className="w-12 h-12 text-orange-500 mx-auto" />
              <CardTitle className="text-center text-orange-700">Untuk Admin</CardTitle>
              <CardDescription className="text-center">
                Kelola pengaturan aplikasi dan pengguna
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <User className="mr-2 h-5 w-5 text-orange-500" />
                  <span>Kelola akun pengguna</span>
                </li>
                <li className="flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-orange-500" />
                  <span>Atur parameter kesehatan</span>
                </li>
                <li className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-orange-500" />
                  <span>Kustomisasi pengaturan sekolah</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <a href="/admin/dashboard.html" className="w-full">Masuk Portal Admin</a>
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Tips Kesehatan Hari Ini
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <img src="/images/handwashing.png" alt="Cuci Tangan" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-center mb-2">Cuci Tangan</h3>
              <p className="text-gray-700">
                Cuci tangan dengan sabun minimal 20 detik sebelum makan dan setelah bermain.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <img src="/images/fruits-kids.png" alt="Makan Buah" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-center mb-2">Makan Buah & Sayur</h3>
              <p className="text-gray-700">
                Makan buah dan sayur 5 porsi sehari untuk tubuh yang sehat dan kuat!
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <img src="/images/exercise-kids.png" alt="Olahraga" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-center mb-2">Rajin Berolahraga</h3>
              <p className="text-gray-700">
                Bergerak aktif minimal 60 menit setiap hari membuat tubuh tetap bugar.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            <a href="/" className="px-8">Mulai Sekarang</a>
          </Button>
        </section>
      </main>

      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500">
            © 2025 Peduli Sehatku - Aplikasi Pemantau Kesehatan Anak SD
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
