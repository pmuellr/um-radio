// Licensed under the Apache License. See footer for details.

function TracksGetTracks($scope, search) {

  //-------------------------------------
  function gotTracks(data, textStatus, jqXHR) {
    console.log("gotTracks:")
    console.log("  data:       " + JSON.stringify(data))
    console.log("  textStatus: " + textStatus)


  }

  //-------------------------------------
  function gotTracksError(jqXHR, textStatus, error) {
    var message = "error getting user-model: " + textStatus + ": " + error
    alert(message)
  }

}

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Copyright IBM Corp. 2014
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//------------------------------------------------------------------------------