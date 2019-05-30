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

function change_issues() {
  document.querySelector('.techniques_content').innerHTML = "<p>Watch out for copyright! You must get permission from your lecturer to use images, audio and recordings from class in your work!</p>";
}

function change_techniques() {
  document.querySelector('.techniques_content').innerHTML = "<ul>" +
                                                              "<li>Annotation - Adding your own comments to text that explains or critiques the information. These can be written in the margins or on sticky notes.</li>" +
                                                              "<li>Diagrams - A visual form, can be mind maps, charts or tables. See Note Layouts for more information.</li>" +
                                                              "<li>Paraphrasing - Making the information smaller and in your own words. This can make it easier to understand.</li>" +
                                                              "<li>Summaries - Focusing on the main points, making a short overview.</li>" +
                                                            "</ul>";
}

function change_abbreviations() {
  document.querySelector('.techniques_content').innerHTML = "<p>Abbreviations are shortened forms of words. Using abbreviations can help you save space, and help you focus on the main topics. Listed below are some abbreviations and their meanings:</p>" +
                                                            "<table>" +
                                                              "<tr>"
                                                                "<th>Abbreviation</th>" +
                                                                "<th>Meaning</th>" +
                                                              "</tr>" +
                                                              "<tr>" +
                                                                "<td>Re</td>" +
                                                                "<td>About, Regarding or Concerning</td>" +
                                                              "</tr>" +
                                                              "<tr>" +
                                                                "<td>Vs</td>" +
                                                                "<td>Against,Opposite or Versus</td>" +
                                                              "</tr>" +
                                                              "<tr>" +
                                                                "<td>&/+</td>" +
                                                                "<td>And</td>" +
                                                              "</tr>" +
                                                              "<tr>" +
                                                                "<td>Etc</td>" +
                                                                "<td>And so on and So forth</td>" +
                                                              "</tr>" +
                                                              "<tr>" +
                                                                "<td>≈</td>" +
                                                                "<td>Approximately or Roughly</td>" +
                                                              "</tr>" +
                                                              "<tr>" +
                                                                "<td>Defn</td>" +
                                                                "<td>Definition</td>" +
                                                              "</tr>" +
                                                              "<tr>" +
                                                                "<td>Eg</td>" +
                                                                "<td>Example</td>" +
                                                              "</tr>" +
                                                              "<tr>" +
                                                                "<td>*</td>" +
                                                                "<td>Important</td>" +
                                                              "</tr>" +
                                                              "<tr>" +
                                                                "<td>ie</td>" +
                                                                "<td>That is</td>" +
                                                              "</tr>" +
                                                              "<tr>" +
                                                                "<td>w/</td>" +
                                                                "<td>With</td>" +
                                                              "</tr>" +
                                                              "<tr>" +
                                                                "<td>w/out</td>" +
                                                                "<td>Without</td>" +
                                                              "</tr>" +
                                                            "</table>";
}
