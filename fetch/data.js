// Fungsi untuk mendapatkan daftar fakultas dari endpoint
function getFaculties() {
  fetch('https://mytsuclassroom.my.id/api/faculty')
    .then(response => response.json())
    .then(data => {
      const facultyDropdown = document.getElementById('facForm');
      data.forEach(faculty => {
        const option = document.createElement('option');
        option.value = faculty._id;
        option.text = faculty.faculty;
        facultyDropdown.appendChild(option);
      });
    });
}

// Fungsi untuk mendapatkan daftar arah pendidikan dari endpoint
function getEducationDirections() {
  const facultyId = document.getElementById('facForm').value;
  const educationDirectionDropdown = document.getElementById('direForm');
  
  // Bersihkan opsi sebelum memuat data baru
  educationDirectionDropdown.innerHTML = '<option disabled selected>Education Direction</option>';
  
  if (facultyId) {
    fetch(`https://mytsuclassroom.my.id/api/faculty/${facultyId}`)
      .then(response => response.json())
      .then(data => {
        data.forEach(direction => {
          const option = document.createElement('option');
          option.value = direction._id;
          option.text = direction.direction;
          educationDirectionDropdown.appendChild(option);
        });
      });
  }
}

// Fungsi untuk mendapatkan daftar grup dari arah pendidikan yang dipilih
function getGroups() {
  const educationDirectionId = document.getElementById('direForm').value;
  const groupDropdown = document.getElementById('groupForm');
  
  // Bersihkan opsi sebelum memuat data baru
  groupDropdown.innerHTML = '<option disabled selected>Group</option>';
  
  if (educationDirectionId) {
    const selectedDirection = data.find(d => d._id === educationDirectionId);
    selectedDirection.group.forEach(group => {
      const option = document.createElement('option');
      option.value = group._id;
      option.text = group.group_code;
      groupDropdown.appendChild(option);
    });
  }
}

// Memanggil fungsi untuk mendapatkan daftar fakultas saat halaman dimuat
document.addEventListener('DOMContentLoaded', getFaculties);
