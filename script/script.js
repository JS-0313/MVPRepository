function toggleSidebar() {
  document.getElementById("mobile_nav_bar").classList.toggle("active");
}

function change_tools() {
  document.querySelector('.tipstools_content').innerHTML =  "<p>This is a list of tools and resources you can use when organising your physical notes:</p>" +
              "<ul>" +
                "<li>Loose-Leaf Folder or Ring Binder</li>" +
                "<li>Coloured pens, pencils and highlighters</li>" +
                "<li>Note Pad Paper</li>" +
                "<li>Hole Punch</li>" +
              "</ul>" +
              "<p>This is a list of tools and resources you can use when organising your digital notes:</p>" +
              "<ul>" +
                "<li>Laptop, Ipad or Tablet</li>" +
                "<li>Audio Recording, with your lecturer's permission</li>" +
                "<li>Google Drive, OneDrive or iCloud</li>" +
              "</ul>";
}

function change_notes() {
  document.querySelector('.tipstools_content').innerHTML = "<p>Organising and Reviewing your notes can help you make connections between ideas and gain an overview of the subject as a whole. Remember to constantly revise throughout the semester, this will help keep the information in your mind. When reviewing your notes, highlight key words and ideas, and resummarise the information to make it as small as possible.</p>";
}

function change_digitalnotes() {
  document.querySelector('.tipstools_content').innerHTML = "<p>When you begin organising your notes, remember the following:</p>" +
            "<ul>" +
              "<li>Make a summary of each subject</li>" +
              "<li>Create back-ups of your notes on websites such as Google Drive and OneDrive</li>" +
              "<li>Update your backups regularly to avoid loosing information</li>" +
            "</ul>";
}

function change_revision() {
  document.querySelector('.tipstools_content').innerHTML = "<p>When you begin organising your notes, remember the following:</p>" +
              "<ul>" +
              "<li>Create a seperate pile/folder for each class</li>" +
                "<li>Use a ring binder or a loose-leaf folder to avoid running out of storage space</li>" +
                "<li>Devide your notes into Major topics and Minor topics</li>" +
                "<li>Label your deviders clearly</li>" +
                "<li>Make a summary of your notes for skim reading</li>" +
              "</ul>";
}
